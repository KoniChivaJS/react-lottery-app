import React from "react";
import { User } from "../App";

interface Props {
  className?: string;
  users: User[];
}

export const Winners: React.FC<Props> = ({ className, users }) => {
  const [winners, setWinners] = React.useState<User[]>([]);

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const chooseWinner = (): void => {
    const randomIndex = getRandomInt(users.length);
    const randomUser = users[randomIndex];

    if (!winners.some((winner) => winner.id === randomUser.id)) {
      setWinners([...winners, randomUser]);
    } else {
      if (winners.length < users.length) {
        chooseWinner();
      }
    }
  };

  const deleteWinner = (id: number) => {
    setWinners(winners.filter((user) => user.id !== id));
  };

  return (
    <div className="w-full my-5 flex justify-between gap-8">
      <div className="w-full flex flex-col">
        <div className="w-full border p-2 h-12 flex items-center flex-wrap gap-2 rounded-lg">
          {winners.map((user) => (
            <div
              key={user.id}
              className="bg-blue-600 text-white p-2 h-8 flex items-center rounded-md"
            >
              <p>{user.name}</p>
              <button
                type="button"
                onClick={() => deleteWinner(user.id)}
                className="ml-2"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="w-36  bg-blue-600 text-white p-2 h-12 rounded-md hover:bg-blue-700 transition"
        onClick={chooseWinner}
        disabled={
          users.length === 0 ||
          winners.length >= 3 ||
          winners.length === users.length
        }
      >
        New Winner
      </button>
    </div>
  );
};
