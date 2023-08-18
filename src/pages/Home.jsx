import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Input, Textarea, Paper, Text, Avatar } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useState } from 'react';


function Home() {
    const [opened, { open, close }] = useDisclosure(false);
    const [isLiked, setLiked] = useState(false)
    const [likes, setLikes] = useState(0);

    function handeLikes() {
        setLiked(!isLiked)
        setLikes(likes + 1)
    }

    return (
        <>
            <Modal opened={opened} onClose={close} title="Post Feed" centered>
                <Textarea placeholder="Whats New in your Area ..." />
                <br />

                <Dropzone >
                    <p>Click to upload files</p>
                </Dropzone>


                <Button className="bg-blue-500 mt-3">Post</Button>

            </Modal>

            <div className="flex gap-4 m-5">

                <div className="w-5/6">
                    <Input placeholder="Whats new in Your Area" onClick={open} />

                    <Paper className="p-5 mt-3 text-gray-700 ">
                        <Group className="border-b-2 border-gray-300">
                            <Avatar src="./src/assets/events 3.jpg" alt="it's me" className="bg-gray-800 rounded-2xl" />
                            <div>
                                <Text className="font-semibold">Famba Abdulnassiir <span className="text-blue-500"> leaves at Nansana</span></Text>
                                <Text className="text-gray-400 pb-3">Wednesday, Aug 16 10pm</Text>
                            </div>

                        </Group>
                        <Text className="pt-3  pb-2 border-b-2 border-gray-300">
                            We are the world we are the children, so come and have fun with us for real the one and the only one is here with you
                        </Text>

                        <Text className="pt-3" >
                            <i className="fa-regular fa-heart pr-3" style={{ color: isLiked ? "red" : "gray" }} onClick={handeLikes}></i>
                            {likes} Like
                        </Text>

                    </Paper>

                    <Paper className="p-5 mt-3 text-gray-700">
                        <Group className="border-b-2 border-gray-300">
                            <Avatar src="./src/assets/events 3.jpg" alt="it's me" className="bg-gray-800 rounded-2xl" />
                            <div>
                                <Text className="font-semibold">Famba Abdulnassiir <span className="text-blue-500"> leaves at Nansana</span></Text>
                                <Text className="text-gray-400 pb-3">Wednesday, Aug 16 10pm</Text>
                            </div>

                        </Group>

                        <Text className="pt-3">
                            We are the world we are the children, so come and have fun with us for real the one and the only one is here with you
                        </Text>
                        
                        <div className="w-3/5 pt-1 m-auto">
                            <img src="./src/assets/events 3.jpg" alt="Events Image post" />
                        </div>

                        <Text className="pt-3  pb-2 border-b-2 border-gray-300">
                           
                        </Text>                      

                        <Text className="pt-3" >
                            <i className="fa-regular fa-heart pr-3" style={{ color: isLiked ? "red" : "gray" }} onClick={handeLikes}></i>
                            {likes} Like
                        </Text>

                    </Paper>

                    <Paper className="p-5 mt-3 text-gray-700 ">
                        <Group className="border-b-2 border-gray-300">
                            <Avatar src="./src/assets/events 3.jpg" alt="it's me" className="bg-gray-800 rounded-2xl" />
                            <div>
                                <Text className="font-semibold">Famba Abdulnassiir <span className="text-blue-500"> leaves at Nansana</span></Text>
                                <Text className="text-gray-400 pb-3">Wednesday, Aug 16 10pm</Text>
                            </div>

                        </Group>
                        <Text className="pt-3  pb-2 border-b-2 border-gray-300">
                            We are the world we are the children, so come and have fun with us for real the one and the only one is here with you
                        </Text>

                        <Text className="pt-3" >
                            <i className="fa-regular fa-heart pr-3" style={{ color: isLiked ? "red" : "gray" }} onClick={handeLikes}></i>
                            {likes} Like
                        </Text>

                    </Paper>

                </div>

                <div className="w-1/4 gap-3">
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

        </>
    )
}

export default Home;