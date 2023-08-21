import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Input, Textarea, Paper, Text, Avatar, Image } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useState, useEffect } from 'react';


function Home() {
    const [opened, { open, close }] = useDisclosure(false);
    const postUrl = "http://localhost:1337/api/posts?populate=users_permissions_user,post_images";
    const [posts, setUsers] = useState([]);


    //This code will be used later when we implement the like and comment section.
    // const [isLiked, setLiked] = useState(false)
    // const [likes, setLikes] = useState(0);

    // function handeLikes() {
    //     setLiked(!isLiked)
    //     setLikes(likes + 1)
    // }

    useEffect(() => {
        fetch(postUrl)
            .then(response => response.json())
            .then(data => {
                const fetchedPosts = data?.data || [];
                console.log(data)
                setUsers(fetchedPosts)
            });
    }, [])


    return (
        <div className="flex flex-row m-8 gap-1">            


            <div className="flex flex-row gap-3">

                <div className="w-4/5">
                    <Input placeholder="Whats new in Your Area" onClick={open} />

                <div>
                {
                    posts.map(post => {

                        const { id, attributes } = post;
                        const { post_content, createdAt, users_permissions_user, post_images, user_location} = attributes;
                        const imageUrl = post_images?.data?.attributes?.formats?.small?.url || '';
                        const posted_by = users_permissions_user?.data?.attributes?.username || "Public User"
                        const last_name = users_permissions_user?.data?.attributes?.last_name || ""
                        const user_loc = users_permissions_user?.data?.attributes?.user_location || "Un-Known Location"
                        const first_name = users_permissions_user?.data?.attributes?.first_name || ""
                        const initials = last_name[0] + first_name[0] || "PU";
                        // console.log(initials);

                        if (id && attributes) {
                            return (
                                <div key={id}>
                                    <Paper className="p-5 mt-3 text-gray-700">
                                        <Group className="border-b-2 border-gray-300">
                                         <Avatar color="brown" radius="xl">{initials}</Avatar>
                                            <div>
                                                <Text className="font-semibold">{posted_by} <span className="text-blue-500">Lives in {user_loc}</span></Text>
                                                <Text className="text-gray-400 pb-3">{new Date(createdAt).toString()}</Text>
                                            </div>

                                        </Group>

                                        <Text className="pt-3">
                                            {post_content}
                                        </Text>

                                        <div className="w-3/5 pt-1 m-auto">
                                            {imageUrl ? <Image
                                                src={imageUrl}
                                                height={188}
                                                alt="Profile Image"
                                            /> : null}

                                        </div>

                                        <Text className="pt-3  pb-2 border-b-2 border-gray-300">

                                        </Text>
                                    </Paper>
                                </div>
                            )

                        }
                    })



                }


            </div>
            </div>

                   

                <div className="w-1/5 gap-3">
                    <div className="bg-white rounded-lg p-3">
                        <p className="text-gray-800 p-2 pt-0 m-2 text-center border-b-2 border-gray-500">Advertising</p>
                        <img src="./src/assets/Nike.png" alt="Advert Image" />
                        <p className="text-base font-semibold pt-2 text-gray-800">Special Offer 20% off</p>
                        <p className="text-blue-500">https://nike.com</p>
                        <p className="text-gray-500">Share here two lines about the advert</p>
                    </div>

                    <div className="bg-white rounded-lg p-3 mt-3">
                        <p className="text-gray-800 p-2 pt-0 m-2 text-center border-b-2 border-gray-500">Upcoming Events</p>
                        <img src="./src/assets/events2.png" alt="Advert Image" />
                        <p className="text-base font-semibold pt-2 text-gray-800">Events Name</p>
                        <p className="text-gray-500">date of event</p>
                        <p className="text-base font-semibold pt-2 text-gray-800">Events Name</p>
                        <p className="text-gray-500">date of event</p>
                        <p className="text-base font-semibold pt-2 text-gray-800">Events Name</p>
                        <p className="text-gray-500">date of event</p>
                        <p className="text-base font-semibold pt-2 text-gray-800">Events Name</p>
                        <p className="text-gray-500">date of event</p>
                    </div>

                    <div className="bg-white rounded-lg p-3 mt-3">
                        <p className="text-gray-800 p-2 pt-0 m-2 text-center border-b-2 border-gray-500">People</p>
                        <p className="text-base font-semibold pt-2 text-gray-800">Famba Abdulnassiir</p>
                        <p className="text-gray-500">fnassiir22@gmail.com <br /> IT Officer</p>
                        <p className="text-base font-semibold pt-2 text-gray-800">Cyprian Kizito</p>
                        <p className="text-gray-500">Kizito@gmail.com <br /> Food Scientst</p>
                        <p className="text-base font-semibold pt-2 text-gray-800">Jeremy Mujuni</p>
                        <p className="text-gray-500">jerry@yahoo.com<br />Server Adminstrator</p>
                        <p className="text-base font-semibold pt-2 text-gray-800">Peter Clive</p>
                        <p className="text-gray-500">clivek@hotmail.com<br />Back-end Developer</p>
                    </div>
                </div>
        </div>


        <Modal opened={opened} onClose={close} title="Post Feed" centered>
                <Textarea placeholder="Whats New in your Area ..." />
                <br />

                <Dropzone >
                    <p>Click to upload files</p>
                </Dropzone>


                <Button className="bg-blue-500 mt-3">Post</Button>

            </Modal>


        </div>
    )
}

export default Home;