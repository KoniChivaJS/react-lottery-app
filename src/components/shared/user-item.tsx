import React from "react";
import { User } from "../../App";
import { Pencil, Trash } from "lucide-react";
import { Form } from "./form";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";

interface Props {
  className?: string;
  user: User;
  index: number;
  updateUser: (user: User) => void;
  deleteUser: (id: number) => void;
}

export const UserItem: React.FC<Props> = ({
  className,
  user,
  index,
  updateUser,
  deleteUser,
}) => {
  const [isOpenEdit, setIsOpenEdit] = React.useState(false);
  const [isOpenDelete, setIsOpenDelete] = React.useState(false);

  React.useEffect(() => {
    setIsOpenEdit(false);
  }, [user]);

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="grid grid-cols-6 border-b py-2">
        <div>{index + 1}</div>
        <div>{user.name}</div>
        <div>{user.dateOfBirth}</div>
        <div>{user.email}</div>
        <div>{user.phoneNumber}</div>
        <div className="flex items-center gap-4">
          <Pencil
            onClick={() => setIsOpenEdit(!isOpenEdit)}
            className="cursor-pointer"
          />
          <Trash
            className="cursor-pointer"
            onClick={() => setIsOpenDelete(true)}
          />
        </div>
      </div>

      <Modal
        isModalOpen={isOpenEdit}
        modalContent={
          <div>
            <Form user={user} updateUser={updateUser} />
          </div>
        }
        onClose={() => setIsOpenEdit(false)}
      />

      <Modal
        isModalOpen={isOpenDelete}
        modalContent={
          <div className="py-10">
            <h3 className="text-xl">
              You want to delete: <br /> {user.name}, {user.email}?
            </h3>
            <div className="flex items-center justify-between mt-6">
              <Button text="Delete" onClick={() => deleteUser(user.id)} />
              <Button text="Cancel" onClick={() => setIsOpenDelete(false)} />
            </div>
          </div>
        }
        onClose={() => setIsOpenDelete(false)}
      />
    </div>
  );
};
