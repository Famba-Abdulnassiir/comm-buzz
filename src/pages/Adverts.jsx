import { Card, Image, Text, Button, Paper, Title} from '@mantine/core';


function Adverts() {
    return (
        <>
        <Paper>
            <Title className="text-center">
                Comm Buzz <span className="text-2xl text-gray-700">Ads</span>
            </Title>
                <Text className="font-bold text-xl text-center">Advertise with Us and reach 1000s of Customers</Text>
                <Button className="text-center bg-black ml-7 mb-2"> Post An Advert</Button>
            </Paper>
            <div className="flex flex-wrap gap-5 m-10">
                <Card className="advert-card"
                    shadow="sm"
                    padding="xl"
                    component="a"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                >
                    <Card.Section>
                        <Image
                            src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                            height={160}
                            alt="No way!"
                        />
                    </Card.Section>

                    <Text weight={500} size="lg" mt="md">
                        You&apos;ve won a million dollars in cash!
                    </Text>

                    <Text mt="xs" color="dimmed" size="sm">
                        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
                    </Text>
                </Card>

                <Card className="advert-card"
                    shadow="sm"
                    padding="xl"
                    component="a"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                >
                    <Card.Section>
                        <Image
                            src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                            height={160}
                            alt="No way!"
                        />
                    </Card.Section>

                    <Text weight={500} size="lg" mt="md">
                        You&apos;ve won a million dollars in cash!
                    </Text>

                    <Text mt="xs" color="dimmed" size="sm">
                        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
                    </Text>
                </Card>


                <Card className="advert-card"
                    shadow="sm"
                    padding="xl"
                    component="a"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                >
                    <Card.Section>
                        <Image
                            src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                            height={160}
                            alt="No way!"
                        />
                    </Card.Section>

                    <Text weight={500} size="lg" mt="md">
                        You&apos;ve won a million dollars in cash!
                    </Text>

                    <Text mt="xs" color="dimmed" size="sm">
                        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
                    </Text>
                </Card>

                <Card className="advert-card"
                    shadow="sm"
                    padding="xl"
                    component="a"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                >
                    <Card.Section>
                        <Image
                            src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                            height={160}
                            alt="No way!"
                        />
                    </Card.Section>

                    <Text weight={500} size="lg" mt="md">
                        You&apos;ve won a million dollars in cash!
                    </Text>

                    <Text mt="xs" color="dimmed" size="sm">
                        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
                    </Text>
                </Card>
            </div>
        </>

    );
}

export default Adverts;