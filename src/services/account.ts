import { BACKEND_URL } from "@/helpers";

export async function getAmountDue(selectedFriend?: string) {
  const friendNameParam = selectedFriend ? `?friend_name=${selectedFriend}` : '';
  const response = await fetch(`${BACKEND_URL}/account/${friendNameParam}`);
  const data = await response.json();

  return data;
}