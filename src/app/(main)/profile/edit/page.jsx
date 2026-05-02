"use client";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FiCheck, FiArrowLeft, FiUser, FiImage } from "react-icons/fi";

const EditProfilePage = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [updateLoading, setUpdateLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", image: "" });

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        name: user.name || "",
        image: user.image || "",
      });
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdateLoading(true);

    try {
      const { error } = await authClient.updateUser({
        name: formData.name,
        image: formData.image,
      });

      if (error) {
        toast.error(error.message || "Failed to update profile");
      } else {
        toast.success("Profile updated successfully!");
        router.refresh();
        router.push("/profile");
      }
    } catch (err) {
      toast.error("An unexpected error occurred!");
    } finally {
      setUpdateLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-[#141414] border border-gray-900 p-8 md:p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-600/20 blur-[80px] pointer-events-none"></div>

        <button
          onClick={() => router.back()}
          className="group text-gray-500 hover:text-white mb-8 flex items-center gap-2 text-sm font-bold transition-colors"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
          Back to Profile
        </button>

        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter">
            Update <span className="text-orange-500">Identity</span>
          </h2>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">
            Personalize your SkillOrbit account
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest ml-1">
              <FiUser className="text-orange-500" /> Display Name
            </label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-[#0b0b0b] border border-gray-800 text-white px-5 py-4 rounded-2xl focus:border-orange-500 outline-none transition-all placeholder:text-gray-700 font-medium"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest ml-1">
              <FiImage className="text-orange-500" /> Avatar URL
            </label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full bg-[#0b0b0b] border border-gray-800 text-white px-5 py-4 rounded-2xl focus:border-orange-500 outline-none transition-all placeholder:text-gray-700 font-medium"
              placeholder="https://your-image-link.com"
            />
          </div>

          <button
            disabled={updateLoading}
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-black italic tracking-tight transition-all active:scale-95 disabled:opacity-50 shadow-[0_10px_20px_rgba(234,88,12,0.2)] flex items-center justify-center gap-2"
          >
            {updateLoading ? (
              <span className="flex items-center gap-2 italic">
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Syncing...
              </span>
            ) : (
              <>
                <FiCheck strokeWidth={3} /> CONFIRM CHANGES
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
