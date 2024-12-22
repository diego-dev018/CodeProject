export interface GitHubUser {
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
    bio: string | null;
    location: string | null;
}

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
    const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
    });

    // if (!response.ok) {
    //     throw new Error(`Failed to fetch GitHub user: ${response.statusText}`);
    // }

    const data = await response.json();
    return {
        login: data.login,
        name: data.name,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        bio: data.bio,
        location: data.location,
    };
}