import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { getRepos } from "../../services/projectsService";
import "@splidejs/react-splide/css";
import CardProject from "./CardProject";
import {
  Splide,
  SplideSlide,
} from "../../../node_modules/@splidejs/react-splide";
interface Repository {
  name: string;
  created_at: string;
  html_url: string;
  description: string;
}

const Projects = () => {
  const [myRepos, setMyRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchRepos = async () => {
      let repos = await getRepos();
      setIsLoading(false);
      setMyRepos(
        repos.sort(
          (a: Repository, b: Repository) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
      );
    };
    fetchRepos();
  }, []);

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div id="projects" className={styles.Projects}>
      <div className={styles.Title}>
        <h3>Projetos</h3>
        <h2>Meus trabalhos recentes</h2>
      </div>
      <div className={styles.Box}>
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            width: 1400,
            pagination: false,
            arrows: true,
            drag: true,
            breakpoints: {
              1200: {
                perPage: 2,
                width: 900,
                arrows: true,
                drag: true,
              },
              900: {
                perPage: 1,
                width: 400,
                arrows: true,
                drag: true,
              },
              300: {
                width: 280,
              },
            },
          }}
        >
          {myRepos?.map((repo, index) => (
            <SplideSlide key={index}>
              <CardProject
                name={repo.name}
                htmlUrl={repo.html_url}
                description={repo.description}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Projects;
