import { Form } from "../UI/Forms";
import { Heading } from "../UI/Heading";
import { Image } from "../UI/Image";
import { Paragraph } from "../UI/Paragraph";
import { Span } from "../UI/Span";
import {UserDescription} from "./Description";
import { UserRepos } from "./Repos";

const UserProfile = (user, repos) => {
  return `

  ${Form()}
  <div class="container_main">
        <div class="main_img">
        ${Image(user.avatar_url)}
        </div>
        <div class="main_info">
          <div class="main_info_name">
            ${Heading(user.name)}
            ${Paragraph(UserDescription(user),"description")}
          </div>
          <div class="main_info_follower">
              <div>
                ${Span(user.followers,"numberFollowers")}
                ${Span("Followers","textSocial")}
              </div>
              <div >
              ${Span(user.following,"numberFollowing")}
              ${Span("Following","textSocial")}
              </div>
              <div>
              ${Span("0","numberRepos")}
              ${Span(user.public_repos,"textSocial")}
              </div>
          </div>
          <div class="main_info_repo">
          ${UserRepos(repos)}
          </div>
    `
    ;
};

export default UserProfile;
