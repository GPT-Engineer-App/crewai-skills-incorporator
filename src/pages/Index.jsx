import React from "react";
import { Container, VStack, Heading, Text, Box, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaUserTie, FaBullhorn, FaChartLine, FaPenFancy, FaHandshake } from "react-icons/fa";

const agents = [
  {
    name: "Emily Chen",
    role: "AdOps Manager",
    goal: "Oversee the setup, optimization, and troubleshooting of ad campaigns.",
    backstory: "With a strong foundation in digital advertising, Emily ensures smooth ad operations and optimal performance.",
    icon: FaUserTie,
    img: "https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBZE9wcyUyME1hbmFnZXJ8ZW58MHx8fHwxNzE3MTE5Nzc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Michael Lee",
    role: "Digital Advertising Specialist",
    goal: "Set up and optimize ad campaigns for maximum reach and effectiveness.",
    backstory: "As a specialist in digital advertising, Michael focuses on delivering high-performance campaigns.",
    icon: FaBullhorn,
    img: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEaWdpdGFsJTIwQWR2ZXJ0aXNpbmclMjBTcGVjaWFsaXN0fGVufDB8fHx8MTcxNzExOTc4MHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Sophia Patel",
    role: "Data Analyst",
    goal: "Analyze and report on campaign performance, providing insights for improvement.",
    backstory: "Sophia excels in making sense of data, turning complex information into actionable insights.",
    icon: FaChartLine,
    img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEYXRhJTIwQW5hbHlzdHxlbnwwfHx8fDE3MTcxMTk3ODN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Rachel Kim",
    role: "Content Writer",
    goal: "Create engaging and informative content to support ad campaigns.",
    backstory: "With a knack for storytelling, Rachel crafts content that resonates with the target audience.",
    icon: FaPenFancy,
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDb250ZW50JTIwV3JpdGVyfGVufDB8fHx8MTcxNzExOTc4NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "David Kim",
    role: "Client Manager",
    goal: "Manage client relationships and ensure satisfaction with campaign performance.",
    backstory: "David builds strong client relationships, ensuring their needs are met and expectations exceeded.",
    icon: FaHandshake,
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDbGllbnQlMjBNYW5hZ2VyfGVufDB8fHx8MTcxNzExOTc4Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          CrewAI Project
        </Heading>
        <Text fontSize="lg">Meet the team and their roles in our digital advertising project.</Text>
        {agents.map((agent, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <HStack spacing={4}>
              <Image src={agent.img} boxSize="100px" borderRadius="full" alt={agent.name} />
              <VStack align="start">
                <HStack>
                  <IconButton aria-label={agent.role} icon={<agent.icon />} size="lg" isRound />
                  <Heading as="h3" size="md">
                    {agent.name}
                  </Heading>
                </HStack>
                <Text fontWeight="bold">{agent.role}</Text>
                <Text>{agent.goal}</Text>
                <Text fontSize="sm" color="gray.500">
                  {agent.backstory}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
