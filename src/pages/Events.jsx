import { Paper, Image, NativeSelect, Text, Box } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Events() {
    return (
        <>
            <p className="p-4 text-xl font-bold">Calender</p>
            <div className="flex">
                <div className="w-1/3">

                    <Paper position="center" className="ml-3">
                        <Calendar className="ml-4" />
                    </Paper>

                    <Paper className="m-3">
                        <Box maw={330} mx="auto">

                            <Text color="black" className="p-3">
                                Don't miss out on important events around let's help you orgnaise important events
                            </Text>

                            <Image
                                src="../src/assets/events 3.jpg"
                                radius="sm"
                            >

                            </Image>
                        </Box>
                    </Paper>

                </div>

                <div className="events-Container flex flex-col  gap-2 w-11/12 m-5 mt-0">
                    <div className="flex gap-8">
                        <NativeSelect className="flex-1"
                            data={['Online', 'Inperson']}
                            label="Select Event Type of intrest"
                            description=""
                            withAsterisk
                        />
                        <NativeSelect className="flex-1"
                            data={['Any Distance']}
                            label="Select Distance of Intrest"
                            withAsterisk
                        />
                    </div>
                    <div className="border-t-4 bg-white pr-4 rounded-lg border-t-gray-500 flex flex-row gap-5">
                        <div className="w-48 m-3">
                            <img src="./src/assets/online event.png" alt="" />
                        </div>
                        <div className="pt-4 flex justify-between flex-col">

                            <div>
                                <p className="text-amber-600">Date and time of the Event</p>
                                <p className="font-bold">Bold title of the Eventbbbbbbbbbbbbbbtheo one and the bbbbb</p>
                                <p className="text-gray-500">Location of the Event</p>
                            </div>

                            <p className="pt-3 pb-3 text-gray-500">6 Attendiees</p>

                        </div>
                        <div className="pt-4 flex justify-between flex-col">
                            <p className="font-bold">Suggested</p>
                            <div className="pb-3 text-gray-400">
                                <i className="fa-solid fa-share-nodes"></i>
                            </div>

                        </div>

                    </div>


                    <div className="border-t-4 bg-white pr-4 rounded-lg border-t-gray-500 flex flex-row gap-5">
                        <div className="w-48 m-3">
                            <img src="./src/assets/online event.png" alt="" />
                        </div>
                        <div className="pt-4 flex justify-between flex-col">

                            <div>
                                <p className="text-amber-600">Date and time of the Event</p>
                                <p className="font-bold">Bold title of the Eventbbbbbbbbbbbbbbtheo one and the bbbbb</p>
                                <p className="text-gray-500">Location of the Event</p>
                            </div>

                            <p className="pt-3 pb-3 text-gray-500">6 Attendiees</p>

                        </div>
                        <div className="pt-4 flex justify-between flex-col">
                            <p className="font-bold">Suggested</p>
                            <div className="pb-3 text-gray-400">
                                <i className="fa-solid fa-share-nodes"></i>
                            </div>

                        </div>

                    </div>


                    <div className="border-t-4 bg-white pr-4 rounded-lg border-t-gray-500 flex flex-row gap-5">
                        <div className="w-48 m-3">
                            <img src="./src/assets/online event.png" alt="" />
                        </div>
                        <div className="pt-4 flex justify-between flex-col">

                            <div>
                                <p className="text-amber-600">Date and time of the Event</p>
                                <p className="font-bold">Bold title of the Eventbbbbbbbbbbbbbbtheo one and the bbbbb</p>
                                <p className="text-gray-500">Location of the Event</p>
                            </div>

                            <p className="pt-3 pb-3 text-gray-500">6 Attendiees</p>

                        </div>
                        <div className="pt-4 flex justify-between flex-col">
                            <p className="font-bold">Suggested</p>
                            <div className="pb-3 text-gray-400">
                                <i className="fa-solid fa-share-nodes"></i>
                            </div>

                        </div>

                    </div>

                </div>



            </div>
        </>
    )
}

export default Events;