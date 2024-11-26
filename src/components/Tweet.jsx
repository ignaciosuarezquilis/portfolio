import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, ScrollShadow, Link, Spacer } from "@nextui-org/react";
import { BsLinkedin  } from "react-icons/bs";
import { RxGithubLogo } from "react-icons/rx";
import { TbFileCv } from "react-icons/tb";

const Tweet= () => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="w-full ">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="../../foto_perfil.jpg" classNames={{
            img: "opacity-80"
          }}/>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Ignacio Suarez Quilis</h4>
            <h5 className="text-small tracking-tight text-default-400">@ignaciosuarezq</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="flex px-3 py-0 text-medium text-default-500">
        <ScrollShadow hideScrollBar isEnabled={false} className="max-w-[340px] ">
          <p>
            Full Stack developer and advanced Software Engineer
          </p>
        </ScrollShadow>
        <Spacer y={6} />
        <div>
        <Button
          href="https://github.com/ignaciosuarezquilis"
          as={Link}
          color="primary"
          variant="solid"
          className="mr-2"
        >
        <TbFileCv />
        </Button>
        <Button
          href="https://www.linkedin.com/in/ignacio-suarez-quilis-8181ab190/"
          as={Link}
          color="primary"
          variant="solid"
          className="mx-2"
        >
        <BsLinkedin />
        </Button>
        <Button
          href="https://github.com/ignaciosuarezquilis"
          as={Link}
          color="primary"
          variant="solid"
          className="mx-2"
        >
        <RxGithubLogo />
        </Button>
        </div>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Tweet;