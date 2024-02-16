import { BACKEND_URL } from "@/helpers";

export async function processPayment(paymentType: string, selectedFriend?: string) {
  try {
    const response = await fetch(`${BACKEND_URL}/pay/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'payment_type': paymentType,
        'friend_name': selectedFriend,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was an error processing the payment:', error);
    return { error: 'There was an error processing the payment' };
  }
}