import { useEffect, useState } from "react";
import { getRepos } from "../services/github";

export default function useGithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      const data = await getRepos();

      setRepos(data);

      setLoading(false);
    }

    loadRepos();
  }, []);

  return { repos, loading };
}