import React from "react";
import { User } from "../../App";
import { Button } from "../ui/button";
import { WinnersItem } from "./winners-item";

interface Props {
  className?: string;
  users: User[];
}

export const Winners: React.FC<Props> = ({ className, users }) => {
  const [winners, setWinners] = React.useState<User[]>([]);

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const chooseWinner = (e?: React.MouseEvent): void => {
    if (e) e.preventDefault();

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
            <WinnersItem
              key={user.id}
              user={user}
              deleteWinner={deleteWinner}
            />
          ))}
        </div>
      </div>

      <Button
        text="New Winner"
        className="h-12"
        onClick={chooseWinner}
        disabled={
          users.length === 0 ||
          winners.length >= 3 ||
          winners.length === users.length
        }
      />
    </div>
  );
};
