import type { Course } from './courseTypes';

export async function fetchCourses(signal?: AbortSignal): Promise<Course[]> {
  let res: Response;
  try {
    res = await fetch('/api/courses', { signal });
  } catch (e: any) {
    throw new Error(e?.name === 'AbortError' ? 'Request aborted' : 'Network error. Please try again.');
  }

  let payload: any = null;
  try {
    payload = await res.json();
  } catch {
    // ignore JSON parse error; handle below
  }

  if (!res.ok) {
    const message = typeof payload?.message === 'string' ? payload.message : `Request failed with status ${res.status}`;
    throw new Error(message);
  }

  if (!Array.isArray(payload?.courses)) {
    throw new Error('Unexpected response from server.');
  }

  return payload.courses as Course[];
}

