const RAPIDAPI_HOST = process.env.NEXT_PUBLIC_RAPIDAPI_HOST;
const RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;

interface SearchParams {
  query: string;
  page?: number;
  num_pages?: number;
  date_posted?: 'all' | 'today' | '3days' | 'week' | 'month';
  remote_jobs_only?: boolean;
}

export async function searchJobs(params: SearchParams) {
  const url = new URL("https://jsearch.p.rapidapi.com/search");

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value.toString());
  });

  try {
    const response = await fetch(url.toString(), {
      headers: {
        "X-RapidAPI-Host": RAPIDAPI_HOST || "",
        "X-RapidAPI-Key": RAPIDAPI_KEY || "",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (data.status === "ERROR") {
      throw new Error(data.error.message);
    }

    return data.data;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    throw error;
  }
}
