import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const loginUserData = create(persist((set) => ({
    userData: null,
    setUserData: (data) => set({ userData: data }),
    clearUserData: () => set({ userData: null }),
}),
    {
        name: 'login-user-data',
    }
));

export default loginUserData;