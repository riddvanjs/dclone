import React, { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectUserName, selectUserAvatar, setAccountUser } from "../../features/user/userSlice";
import { Container } from '../../Components/DashboardNav/styled.nav'
import { setMovies } from "../../features/movie/movieSlice";
import ApiService from '../../services/api.service';
import DashboardNav from '../../Components/DashboardNav/DashboardNav';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import Viewers from '../../Components/Viewers/Viewers';
import Recommends from '../../Components/Recommends/Recommends';
import NewDisney from '../../Components/NewDisney/NewDisney';
import Originals from '../../Components/Originals/Originals';
import Trending from '../../Components/Trending/Trending';

function Dashboard() {
    const selectedUser = useSelector(selectUserName)
    const selectedAvatar = useSelector(selectUserAvatar)
    // const selectedRecommend = useSelector(selectRecommend)
    const dispatch =  useDispatch()
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
    // const [recommend, setRecommend] = useState(recommends)

    const setUser = useCallback(
        (user) => {
            dispatch(setAccountUser({
                userName: user.userName,
                avatar: user.avatar 
            }))
        },
        [dispatch],
    )


    const getAllMovies = useCallback(
        async () => {
            try {
                const movies = await ApiService.movies();
                const { allMovies } = movies.data;
                return allMovies;
            } catch (e) {
                alert('no movies')
            }
        },
        [],
    )

    useEffect(() => {

        getAllMovies().then((movies) => {
            movies.forEach((doc) => {
                switch (doc.type) {
                  case "recommend":
                    recommends = [...recommends, { ...doc }];
                    break;
        
                  case "new":
                    newDisneys = [...newDisneys, { ...doc }];
                    break;
        
                  case "original":
                    originals = [...originals, { ...doc }];
                    break;
        
                  case "trending":
                    trending = [...trending, { ...doc }];
                    break;
                }
              });
              dispatch(
                setMovies({
                  recommend: recommends,
                  newDisney: newDisneys,
                  original: originals,
                  trending: trending,
                })
              );
        })

    }, [setUser, selectedUser, selectedAvatar])


    return (
        <Container>
            <DashboardNav selectedAvatar={selectedAvatar} selectedUsername={selectedUser}/>
            <ImageSlider/>
            <Viewers/>
            <Recommends/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>
    )
}

export default Dashboard
