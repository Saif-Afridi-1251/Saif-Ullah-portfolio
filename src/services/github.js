import profile from "../data/profile";

export async function getRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${profile.githubUsername}/repos`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const data = await response.json();

    // Sort newest first
    return data.sort(
      (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
    );
  } catch (error) {
    console.error("GitHub API Error:", error);
    return [];
  }
}