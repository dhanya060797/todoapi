import { graphConfig } from "../../utils/authConfig";
import axios from "axios";

/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */
export async function callMsGraph(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.graphMeEndpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function callMsGraphTodoTaskList(accessToken, taskId) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(`${graphConfig.graphMeEndpoint}/${taskId}/tasks`, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export function taskUpdate(taskListId, task, accessToken) {
  axios({
    method: "patch",
    url: `${graphConfig.graphMeEndpoint}/${taskListId}/tasks/${task.id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    data: {
      status: "completed",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
export function calenderevnets(
  startDateString,
  endDateString,
  USER_PUBLIC_ID,
  accessToken
) {
  axios({
    url: `https://graph.microsoft.com/v1.0/users/${USER_PUBLIC_ID}/calendarview?startdatetime=${startDateString}&enddatetime=${endDateString}&orderby=start/dateTime`,

    method: "GET",

    headers: {
      Authorization: `Bearer ${accessToken}`

      // "Content-type": "text",
    },
  });
}
