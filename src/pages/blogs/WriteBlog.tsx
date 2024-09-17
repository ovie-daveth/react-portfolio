import React, { useState } from 'react';
import Layout from '../../_layout.tsx';
import { ListItems } from '../../constant.js';
import Button from '../../components/atoms/Button.tsx';
import Tiptap from '../../components/TipTap.tsx';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { auth } from '../../firebase.js'; // Import Firebase configuration

const WriteBlog = () => {
    const [isUp, setIsUp] = useState(0);
    const [formData, setFormData] = useState({
        title: "",
        img: "",
        blogtype: "",
        content: ""
    });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);
    const storage = getStorage();
    const db = getFirestore();

    const animateUp = (num: number) => {
        setIsUp(num);
    };

    const animateDown = () => {
        setTimeout(() => {
            setIsUp(0);
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, files } = e.target;
        if (name === "file" && files) {
            setSelectedFile(files[0]);
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleContentChange = (content: string) => {
        setFormData({
            ...formData,
            content,
        });
    };

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUploading(true);

        let imgUrl = "";
        if (selectedFile) {
            const storageRef = ref(storage, `blog_images/${selectedFile.name}`);
            try {
                await uploadBytes(storageRef, selectedFile);
                imgUrl = await getDownloadURL(storageRef);
            } catch (error) {
                console.error("File upload error: ", error);
            }
        }

        try {
            await addDoc(collection(db, "blogs"), {
                ...formData,
                img: imgUrl,
                createdAt: new Date(),
            });
            alert('Blog post submitted successfully!');
            setFormData({
                title: "",
                img: "",
                blogtype: "",
                content: ""
            });
            setSelectedFile(null);
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('Failed to submit blog post.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <Layout theme={false}>
            <div className='container_all'>
                <form onSubmit={submitForm}>
                    <h1 className='md:font-bold font-semibold md:text-3xl text-xl dark:text-white text-textBold mb-3'>Create Blog post</h1>
                    <div className='flex items-center gap-4 mt-12'>
                        <div className='w-[35%] text-textLight dark:text-dark-textLight'>
                            <select
                                className='w-full border-[1px] border-gray-100 outline-none text-sm md:text-[15px] py-3 px-1 cursor-pointer'
                                name="blogtype"
                                value={formData.blogtype}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select Blog Type</option>
                                {ListItems.map((item) => (
                                    <option
                                        className='cursor-pointer'
                                        key={item.id}
                                        value={item.title}
                                    >
                                        {item.title.toLowerCase() === "all" ? "Select Blog Type" : item.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='mt-10 flex flex-col gap-10 leading-relaxed tracking-widest'>
                        <div className='flex flex-col gap-2 group'>
                            <label
                                className={`${isUp === 1 ? " -translate-y-4" : "translate-y-0"} transition-all ease-in-out duration-300 text-sm md:text-[15px]`}
                                htmlFor="title"
                            >
                                Title
                            </label>
                            <input
                                value={formData.title}
                                name="title"
                                onChange={handleChange}
                                onKeyDown={() => animateUp(1)}
                                onKeyUp={animateDown}
                                className='border-b-[1.4px] border-gray-200 outline-none text-sm md:text-[15px]'
                                type="text"
                                id="title"
                                placeholder='Title goes here...'
                            />
                        </div>
                        <div className='flex flex-col gap-2 leading-relaxed tracking-widest group'>
                            <label
                                className={`${isUp === 2 ? " -translate-y-4" : "translate-y-0"} text-sm md:text-[15px] transition-all ease-in-out duration-300`}
                                htmlFor="img"
                            >
                                Blog Header
                            </label>
                            <input
                                type="file"
                                name="file"
                                onChange={handleChange}
                                className='text-textLight dark:text-dark-textLight text-sm'
                            />
                        </div>
                        <div className='flex flex-col gap-2 leading-relaxed tracking-widest group w-[95%] md:w-full'>
                            <label
                                className={`${isUp === 3 ? " -translate-y-4" : "translate-y-0"} text-sm md:text-[15px] transition-all ease-in-out duration-300`}
                                htmlFor="content"
                            >
                                Blog Content
                            </label>
                            <Tiptap
                                description={formData.content}
                                onChange={handleContentChange}
                                name="content"
                            />
                        </div>
                        <div>
                            <Button
                                className='bg-sidebar_green text-white border-border_green mt-5 text-sm md:text-[15px]'
                                type="submit"
                                disabled={uploading}
                            >
                                {uploading ? 'Posting...' : 'Post Blog'}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default WriteBlog;
