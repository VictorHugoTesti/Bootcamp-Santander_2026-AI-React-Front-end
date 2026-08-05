import { Skills } from "./Skills";

const Profile: React.FC = () => {
  return (
    <>
      <img
        src="https://media.licdn.com/dms/image/v2/D5635AQGanBqyw-W9Wg/profile-framedphoto-shrink_400_400/B56ZXUvFabHEAc-/0/1743030868003?e=1786561200&v=beta&t=si24qFgJYPW6kg6mGZuLMmYbKwDaBwsSEPtP7RFJVw4"
        alt="Victor Hugo"
        width= "200px"
      />
      <h3>Victor Hugo</h3>
      <p><b>Cargo Atual:</b> Desenvolvedor Front-end</p>
      <Skills />
    </>
  );  
}

export default Profile;