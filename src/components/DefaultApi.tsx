import { useEffect, useState } from "preact/hooks";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Props {
  name: string;
  email: string;
  address: Address;
}

const DefaultApi = () => {
  const [users, setUsers] = useState<Props[]>([]);
  useEffect(() => {
    const datafetch = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    datafetch();
  }, []);
  return (
    <main className="flex items-center gap-5">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-5 flex items-center justify-center mt-5">
          Get data fetching
        </h1>
        <table className="min-h-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-2xl font-semibold border-b">
                Name
              </th>
              <th className="px-4 py-2 text-2xl font-semibold border-b border-l border-gray-300">
                Email
              </th>
              <th className="px-4 py-2 text-2xl font-semibold border-b border-l border-gray-300">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b border-l border-gray-300">
                  {user.email}
                </td>
                <td className="py-2 px-4 border-b border-l border-gray-300">
                {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DefaultApi;