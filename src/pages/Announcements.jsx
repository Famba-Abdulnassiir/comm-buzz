import { Input, Button, Title, Text, Group } from '@mantine/core';
import { IconBellSearch } from '@tabler/icons-react';

function Announcements() {
    return (
        <>
            <p className="bg-slate-800 text-white text-2xl pt-4 pl-4">
                Announcements
            </p>
            <div className="flex align-middle justify-center gap-2 bg-slate-800 p-2">
                <div className="w-32">
                    <img src="../src/assets/megaphone2.png" alt="Megaphone image for notifications" />
                </div>
                <div className="flex w-4/5 justify-center align-middle gap-2">
                    <Input className="m-auto w-4/5"
                        icon={<IconBellSearch />}
                        placeholder="Search...."
                    />

                    <Button className="w-1/5 bg-lime-900 m-auto">
                        Search
                    </Button>


                    <Button className="w-1/4 bg-black m-auto">
                        Create Announcement
                    </Button>

                </div>


            </div>
            <div className="m-auto mt-5 flex justify-center align-middle">
                <div className="pr-5">
                    <Text className="text-gray-600">
                        Aug 17 <br />
                        2020
                    </Text>

                </div>

                <div className="border-l-2 border-gray-400 pl-3">
                    <Title className="pb-0 mb-0 text-xl text-gray-900">
                        Application Testing with teammates
                    </Title>
                    <Text className="mt-0 pt-0 text-gray-600">
                        Dear Team we shall have the presentation of a working project tomorrow at a proposed time.
                    </Text>

                </div>

            </div>

            <div className="m-auto mt-5 flex justify-center align-middle">
                <div className="pr-5">
                    <Text className="text-gray-600">
                        Aug 17 <br />
                        2020
                    </Text>

                </div>

                <div className="border-l-2 border-gray-400 pl-3">
                    <Title className="pb-0 mb-0 text-xl text-gray-900">
                        Application Testing with teammates
                    </Title>
                    <Text className="mt-0 pt-0 text-gray-600">
                        Dear Team we shall have the presentation of a working project tomorrow at a proposed time.
                    </Text>

                </div>

            </div>

            <div className="m-auto mt-5 flex justify-center align-middle">
                <div className="pr-5">
                    <Text className="text-gray-600">
                        Aug 17 <br />
                        2020
                    </Text>

                </div>

                <div className="border-l-2 border-gray-400 pl-3">
                    <Title className="pb-0 mb-0 text-xl text-gray-900">
                        Application Testing with teammates
                    </Title>
                    <Text className="mt-0 pt-0 text-gray-600">
                        Dear Team we shall have the presentation of a working project tomorrow at a proposed time.
                    </Text>

                </div>

            </div>

            <div className="m-auto mt-5 flex justify-center align-middle">
                <div className="pr-5">
                    <Text className="text-gray-600">
                        Aug 17 <br />
                        2020
                    </Text>

                </div>

                <div className="border-l-2 border-gray-400 pl-3">
                    <Title className="pb-0 mb-0 text-xl text-gray-900">
                        Application Testing with teammates
                    </Title>
                    <Text className="mt-0 pt-0 text-gray-600">
                        Dear Team we shall have the presentation of a working project tomorrow at a proposed time.
                    </Text>

                </div>

            </div>

            <div className="m-auto mt-5 flex justify-center align-middle">
                <div className="pr-5">
                    <Text className="text-gray-600">
                        Aug 17 <br />
                        2020
                    </Text>

                </div>

                <div className="border-l-2 border-gray-400 pl-3">
                    <Title className="pb-0 mb-0 text-xl text-gray-900">
                        Application Testing with teammates
                    </Title>
                    <Text className="mt-0 pt-0 text-gray-600">
                        Dear Team we shall have the presentation of a working project tomorrow at a proposed time.
                    </Text>

                </div>

            </div>
        </>
    )
}

export default Announcements;