const username = "YFD3v";
const url = `https://api.github.com/users/${username}/repos`;

export const getRepos = async () => {
  try {
    const response = await fetch(url)
      .then((response) => response.json())
      .catch((err) => console.log(err));
    return response;
  } catch (error) {
    console.log(error);
  }
};

const images = ["images/wallpaper1.jpg","images/wallpaper2.jpg", "images/wallpaper3.jpg"]

export const getImageProject = () => {
  const random = Math.floor(Math.random() * images.length);
  return images[random];
}
