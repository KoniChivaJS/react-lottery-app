import React from "react";
import { useParams } from "react-router";
import { User } from "../../../App";
import { getUserService } from "../../../services/user-service";
import toast from "react-hot-toast";

interface Props {
  className?: string;
}

export const UserPage: React.FC<Props> = ({ className }) => {
  const { id } = useParams();

  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  const fetchUser = async (id: number) => {
    try {
      setLoading(true);
      const response = await getUserService(id);
      setUser(response);
    } catch (error: unknown) {
      toast.error("Failed to fetch user");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (id) fetchUser(parseInt(id));
  }, []);

  if (loading) {
    return (
      <div
        className={`min-h-screen bg-gray-50 flex items-center justify-center ${className}`}
      >
        <div className="animate-pulse text-center">
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-48 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-32 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div
        className={`min-h-screen bg-gray-50 flex items-center justify-center ${className}`}
      >
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            User Not Found
          </h2>
          <p className="text-gray-600">
            The requested user could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative mb-6 md:mb-0 md:mr-8">
                <img
                  src={user.avatar}
                  alt={`${user.name}'s avatar`}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-center md:text-left text-white">
                <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                <p className="text-blue-100 mb-1">{user.email}</p>
                <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mt-2">
                  {user.role}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              User Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">User ID</span>
                <span className="text-gray-800 font-semibold">#{user.id}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Email</span>
                <span className="text-blue-600 font-medium">{user.email}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Role</span>
                <span className="capitalize bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {user.role}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">Password</span>
                <span className="text-gray-500 text-sm">●●●●●●●●</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Account Timeline
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Account Created
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {formatDate(user.creationAt)}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Last Updated</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {formatDate(user.updatedAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Avatar Preview
            </h2>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={`${user.name}'s avatar`}
                  className="w-48 h-48 rounded-2xl shadow-lg object-cover"
                />
                <div className="absolute inset-0 border-2 border-transparent hover:border-blue-500 rounded-2xl transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
