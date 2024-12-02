import { ArrowLeft, Camera, ChevronRight, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProfileImage } from '../components/ProfileImage'

export function ProfilePage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/settings" className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>

      {/* Profile Photo */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <ProfileImage />
          <button className="absolute bottom-0 right-0 bg-ribaru-blue p-2 rounded-full hover:bg-blue-700 transition-colors">
            <Camera className="w-4 h-4 text-white" />
          </button>
        </div>
        <h2 className="font-bold text-lg">Kevin Maina</h2>
        <p className="text-gray-500">Sales Representative</p>
      </div>

      {/* Profile Details */}
      <div className="space-y-4 mb-8">
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">FULL NAME</p>
              <p className="font-medium mt-1">Kevin Maina</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">EMAIL ADDRESS</p>
              <p className="font-medium mt-1">kevin@ribaru.com</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">PHONE NUMBER</p>
              <p className="font-medium mt-1">+254 712 345 678</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">PASSWORD</p>
              <p className="font-medium mt-1">••••••••</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button className="w-full flex items-center justify-center gap-2 py-4 text-red-500">
        <LogOut className="w-5 h-5" />
        <span>Log Out</span>
      </button>
    </div>
  )
}
