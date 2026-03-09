import React from "react";

export default function SettingsPage({ user }) {
  return (
    <div className="page p-0 overflow-hidden">
      <div className="px-3 bg-white py-5">
        <p className="desc">Account Settings</p>
      </div>
      <div className="p-4 space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-15 overflow-hidden rounded-full w-15">
            <img
              src="https://imgs.search.brave.com/C6AU3hqShumrOuZaswKHOeZBwOo-XeuuJnf7XZ-5QW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAx/Njc0NDAzNC92ZWN0/b3IvcHJvZmlsZS1w/bGFjZWhvbGRlci1p/bWFnZS1ncmF5LXNp/bGhvdWV0dGUtbm8t/cGhvdG8uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVJxdGky/NlZRal9mcy1faEwx/NW1KajZiODRGRVpO/YTAwRkpnWlJhRzVQ/RDQ9"
              className="h-full w-full object-cover"
              alt="profile"
            />
          </div>
          <div>
            <h2 className="font-semibold">{user?.name || "N/A"}</h2>
            <p className="text-xs font-semibold text-zinc-500">{user?.email || "N/A"}</p>
          </div>
        </div>
        <div className="text-sm text-zinc-600 font-semibold space-y-1">
          <p>Phone: {user?.number || "N/A"}</p>
          <p>Company: {user?.company || "N/A"}</p>
          <p>Agency: {user?.isagency ? "Yes" : "No"}</p>
        </div>
      </div>
      <div className="border-t border-dashed border-gray-400 my-4" />
    </div>
  );
}
