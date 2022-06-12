import { Text, Image, Box } from '@chakra-ui/react';

function Home () {
    return (
          <><Text>
    Welcome to the Child Evangelism Fellowship of Southern Maryland!

    <p>Child Evangelism Fellowship is a Bible-centered organization composed of born-again believers whose purpose is to 
        evangelize boys and girls with the Gospel of the Lord Jesus Christ and to establish (disciple) them in the Word of 
        God and in a local church for Christian living.</p>
</Text>
<br />
<Box display="flex" justifyContent={"center"}>
{/* <Image align="center" boxSize='400px' src="https://www.cefonline.com/wp-content/uploads/2020/08/GNC-English-LOGO-COLOR-v1-0-746x1024-1.png" alt="Good News Club logo" /> */}
<Image align="center" boxSize="300px" src="https://www.cefonline.com/wp-content/themes/cef/images/logo-hover.svg" />
{/* <Img boxSize="300px" src="img/logo-hover.svg" /> */}
</Box>
</>
    );
};


export default Home;
