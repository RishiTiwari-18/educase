import React from 'react'

export default function SettingsPage() {
  return (
    <div className='bg-zinc-100 h-screen w-full'>
      <div className="px-3 bg-white py-5">
        <p className='desc'>Account Settings</p>
      </div>
      <div className="p-4 space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-15 overflow-hidden rounded-full w-15">
            <img src="https://imgs.search.brave.com/C6AU3hqShumrOuZaswKHOeZBwOo-XeuuJnf7XZ-5QW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAx/Njc0NDAzNC92ZWN0/b3IvcHJvZmlsZS1w/bGFjZWhvbGRlci1p/bWFnZS1ncmF5LXNp/bGhvdWV0dGUtbm8t/cGhvdG8uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVJxdGky/NlZRal9mcy1faEwx/NW1KajZiODRGRVpO/YTAwRkpnWlJhRzVQ/RDQ9" className='h-full w-full object-cover' alt="" />
          </div>
          <div className="">
            <h2 className='font-semibold'>Marry doe</h2>
            <p className='text-xs font-semibold text-zinc-500'>Marry@gmail.com</p>
          </div>
        </div>
        <p className='text-sm text-zinc-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nostrum assumenda atque, quibusdam voluptatum quo aperiam enim itaque quam eos officiis aspernatur! Reiciendis nesciunt fugit</p>
      </div>
      <div class="border-t border-dashed border-gray-400 my-4"/>   
    </div>
  )
}
