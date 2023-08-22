import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Input, Textarea, Paper, Text, Avatar, Image,rem } from '@mantine/core';
import { useState, useEffect, useContext } from 'react';
import { IconUpload } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import useAdsContext from '../context/AppContext';
import { Loader } from '@mantine/core';
import { Link } from 'react-router-dom';


function Home() {
    const [opened, { open, close }] = useDisclosure(false);
    const postUrl = "http://localhost:1337/api/posts?populate=users_permissions_user,post_images";
    const [posts, setUsers] = useState([]);
    const [selectedFile, setSelectedFile] = useState('');
    const uploadUrl = "http://localhost:1337/api/posts"
    const imageUploadUrl = "http://localhost:1337/api/upload/"
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const { adverts } = useAdsContext();
    console.log(adverts);


    //from Mantine useForm we can initialise our values take this as setState in normal react
    const form = useForm({
        initialValues: {
            post_content: '',
        }
    })

    // const advertHome = () => {
    //     const location = useLocation();
    //     const state = location.state;
    //     console.log("Date just came this easily"+ " "+ state);
    // }


    //This code will be used later when we implement the like and comment section.
    // const [isLiked, setLiked] = useState(false)
    // const [likes, setLikes] = useState(0);

    // function handeLikes() {
    //     setLiked(!isLiked)
    //     setLikes(likes + 1)
    // }

    useEffect(() => {
        // setIsLoading(true);
        fetch(postUrl)
            .then(response => response.json())
            .then(data => {
                const fetchedPosts = data?.data || [];
                console.log(data)
                setUsers(fetchedPosts)
            });
    }, [])

    //Handle Image upload first before we can handle entire post for adverts
    //When someone adds a file to our file in put lets post it to the strapi side get a response we can use it as our file to be posted
    //Note we pulled this from a nested fetch, after we recieved the image data from the server we later used fetch Api to intergrate it with data we want to post

    const handleImageUpload = (values) => {

        if (selectedFile) {
            const formData = new FormData();
            formData.append("files", selectedFile);

            fetch(imageUploadUrl, {
                method: "POST",
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    //Here we save the Image Id to our Application that we shall later use to post data to out Advert page.
                    const fileId = data[0].id;
                    console.log(fileId)

                    const { post_content } = form.values

                    fetch(uploadUrl, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(
                            {
                                "data": {
                                    post_content: values.post_content,
                                    post_images: fileId
                                }

                            }
                        )
                    }).then(response => {
                        response.json()
                        if (response.ok) {
                            return (posts)
                            setError('Post Successfull Uploaded')
                        } else {
                            throw new Error('Please Ensure all the Fields are entered Correctly');
                        }
                    })

                })
        }
    }



    return (
        <div className="flex flex-row m-5 ml-8 gap-1 home">


            <div className="flex flex-row">

                <div className="w-4/5">
                    <Input placeholder="Whats new in Your Area" onClick={open} />

                    <div>
                        {
                            posts.map(post => {
                                const { id, attributes } = post;
                                const { post_content, createdAt, users_permissions_user, post_images, user_location } = attributes;
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
                                                        // height={200}
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


                <div className="w-1/4 gap-2">
                    {
                        adverts.map(advert => {
                            const { id, attributes } = advert;

                            if (id, attributes) {
                                const { advert_description, advert_image
                                    , advert_link, advert_title } = attributes || {};
                                const imageUrl = advert_image?.data?.attributes?.formats?.small?.url || '';
                            
                                return(
                                    <Paper className="m-3">
                                        
                                            <p className="text-gray-800 pt-3 m-2 text-center border-b-2 border-gray-500">Advertising</p>
                                            <Image src={imageUrl} alt="Advert Image" />
                                        <div className="p-2">
                                            <p className="text-base font-semibold pt-2 text-gray-800">{advert_title}</p>
                                            <p className="text-blue-500"><Link to={{advert_link}}>Follow link for Updates</Link></p>
                                            <p className="text-gray-500">{advert_description}</p>
                                        </div>
                                    </Paper>                                
                                )
                            }
                            return false;

                        })
                    }

                </div>

                {/* </div> */}

                {/* <div className="bg-white rounded-lg p-3">
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
                </div> */}
            </div>


            <Modal opened={opened} onClose={close} title="Post Feed" centered>
                <form onSubmit={form.onSubmit(handleImageUpload)}>
                    <Group>
                        <Textarea className="w-10/12 m-auto"
                            label="Post Content"
                            required
                            placeholder="Whats new in the Area paste it here"
                            {...form.getInputProps("post_content")}
                        />
                        <div className="border-2 border-dashed p-3 w-11/12 m-auto text-center">
                            <input id="imageUpload" className="m-auto"
                                type='file'
                                label="Advert Image"
                                placeholder="Upload Your Image"
                                accept="image/png,image/jpeg,image/jpg"
                                onChange={(e) => setSelectedFile(e.target.files[0])}
                                icon={<IconUpload size={rem(14)} />}
                            />

                        </div>
                    </Group>
                    <Button type="submit" className="bg-blue-500 mt-3">Post</Button>
                </form>
                <Text className="text-green-800 m-auto p-2">
                    {error}
                </Text>

            </Modal>


        </div>
    )
}

export default Home;