import { useAuthStore } from "../../app/stores/authStore";

export default function Home() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Home Page
      </h1>

      <p className="mt-4">
        Welcome {user?.email}
      </p>
    </div>
  );
}