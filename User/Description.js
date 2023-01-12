export function Description(user) {
    if (user.bio === null) {
       return profileDescription.innerHTML="Description not provided"
      }
      else{
       return profileDescription.innerHTML = user.bio;
      }
  }
