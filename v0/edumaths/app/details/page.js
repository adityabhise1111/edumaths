"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { findUserByEmail } from "@/lib/actions/userActions";



const page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [form, setform] = useState({
    name: "",
    email: "",
    orgname: "",
    address: "",
    phone: "",
    description: "",
    profilePicture: "",
    coverPicture: "",
  });
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getdata = async () => {
    try{
        if (session?.user?.email){
            const userData = await findUserByEmail(session.user.email);
            if (userData) {
                setform(userData);
            }
        }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    document.title = "Details - EduMaths";
    if (!session) {
      router.push("/register");
    } else {
      getdata();
    }
  }, [session, router]);

    

  return <div>
    {session ? (
        <>
          <p>Signed in as {session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
          
          <form>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="orgname"
              value={form.orgname}
              onChange={handleChange}
              placeholder="Organization Name"
            />
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
            />
          </form>
        </>
      ) : (
        <p>Loading...</p>
      )}

    
  </div>;
};

export default page;
