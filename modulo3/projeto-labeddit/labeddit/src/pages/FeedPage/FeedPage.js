import React from "react";
import CommentDetail from "../../components/CommentDetail/CommentDetail";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import faker from "@faker-js/faker";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerBody } from "./styled";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { TOKEN_AUTH } from "../../constants/token";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpVoteGrey  from "../../assets/VotesImg/UpVoteGrey.svg";
import  UpVoteGreen  from "../../assets/VotesImg/UpVoteGreen.svg";
import DownVoteGrey from "../../assets/VotesImg/DownVoteGrey.svg"
import DownVoteRed from "../../assets/VotesImg/DownVoteRed.svg"

const FeedPage = () => {
  useProtectedPage();
  //    const pathParams = useParams();
  const navigate = useNavigate()

 

//   let iconeCurtida 
//   if(like){
//       iconeCurtida = UpVoteGreen
//   }else{
//       iconeCurtida = UpVoteGrey
//   }

  const [posts, isLoadingPosts, errorPosts, getPost] = useRequestData(
    `${BASE_URL}/posts`
  );

  console.log("POSTS na FeedPage", posts)

  const { form, onChangeForm, cleanFields } = useForm({
    title: "",
    body: "",
  });

 
  const createPostVote = (idVote) => {
    const body = {
      direction: 1,
    };

    axios
      .post(`${BASE_URL}/posts/${idVote}/votes`, body, {
        headers: {
          Authorization: `${TOKEN_AUTH}`,
        },
      })
      .then((response) => {
        console.log(response);
        getPost(`${BASE_URL}/posts`);
      }).catch((error)=>{
          console.log(error)
      })
  };
const goToPostDetail = (postId) =>{
    navigate(`/post/${postId}`);
}


  const postsList =
    posts &&
    posts.map((post) => {

const selectedColorVoteLike = () => {
    if(post.userVote < 0 || post.userVote === null){
       return UpVoteGrey
     }else{
      return UpVoteGreen
     }
}

const selectedColorVoteDislike = () => {
    if(post.userVote < 0 || post.userVote === null){
       return DownVoteGrey
     }else{
      return DownVoteRed
     }
}
      
      return (
        <div key={post.id}>
          <div className="ui container comments">
            <CommentDetail
              clickToPostDetail={()=>goToPostDetail(post.id)}
              name={post.username}
              timeAgo={new Date(post.createdAt).toString().slice(0, 21)}
              title={post.title}
              message={post.body}
              avatar={faker.image.avatar()}
              onClickUp={() => createPostVote(post.id)}
              onClickDown={() => createPostVote(post.id)}
              //colorLiked={colorLiked}
              // colorDisliked={colorDisliked}
              imgVoteUp={selectedColorVoteLike()}
              imgVoteDown={selectedColorVoteDislike()}
              numberVotes={post.voteSum}
              numberComments={post.commentCount}
              commentText={"Comentários"}
            />
          </div>
        </div>
      );
    });

  const createPost = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/posts`, form, {
        headers: {
          Authorization: `${TOKEN_AUTH}`,
        },
      })
      .then((res) => {
        console.log(res);
        getPost(`${BASE_URL}/posts`);
        cleanFields();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ContainerBody>
      <form onSubmit={createPost}>
        <TextField
          name={"title"}
          value={form.title}
          label="Título"
          variant="outlined"
          onChange={onChangeForm}
          margin={"dense"}
          required
          fullWidth
        />

        <TextField
          placeholder="Compartilhe algo com a comunidade LabEddit!"
          fullWidth
          name={"body"}
          value={form.body}
          onChange={onChangeForm}
          margin={"dense"}
          required
        />
        <Button type={"submit"} variant="contained" color="primary" fullWidth>
          Postar!
        </Button>
      </form>

      <div>
        {isLoadingPosts && (
          <div className="ui active dimmer">
            <div className="ui text loader">Carregando...</div>
          </div>
        )}
        {!isLoadingPosts && errorPosts && <p>Ocorreu um erro na requisição</p>}
        {!isLoadingPosts && posts && postsList}
        {!isLoadingPosts && posts && postsList.length === 0 && (
          <p>Não há nenhuma postagem</p>
        )}
      </div>
    </ContainerBody>
  );
};

export default FeedPage;


