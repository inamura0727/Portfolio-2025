import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from 'next/link'

export default function ProfilePage() {
  return (
    <Box sx={{ p: 2 }}>
      <Box>
        <Typography sx={{ fontSize: '48px' }}>ABOUT</Typography>
      </Box>
      <Box sx={{ marginBottom: '12px' }}>
        <Box>
          <Typography sx={{ fontSize: '20px' }}>
            Hi My name is Tamaki Inamura. I'm from Japan.
          </Typography>
          <Typography sx={{ fontSize: '20px' }}>
            I have extensive experience working in teams, contributing using
            JavaScript, TypeScript, and React to meet deadlines and achieve team
            goals. Additionally, I have experience working with both frontend
            and backend, including Java, Python, SQL, and AWS (Lambda, API
            Gateway, DynamoDB, S3), adapting my approach as needed. As a
            proactive and adaptable team member, I focused on communication and
            risk management to effectively drive the project's progress.
          </Typography>
          <Typography sx={{ fontSize: '20px' }}>
            <Link href="/project">Please check my project experiences.</Link>
          </Typography>
        </Box>

        <Box sx={{ fontSize: '48px' }}>SKILL</Box>
        <Box sx={{ marginBottom: '12px' }}>
          <Box>
            <Typography sx={{ fontSize: '24px' }}>Language:</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '20px' }}>
              HTML, CSS, JavaScript, TypeScript, Java, Python
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginBottom: '12px' }}>
          <Box>
            <Typography sx={{ fontSize: '24px' }}>
              FRAMEWORK/LIBRARY:
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '20px' }}>
              React(18), Next.js , Axios Z u stand, Tanstac kQue ry, Je st,
              Spring Boot, MyBatis , MUI, React Te sting Libr a ry, boto3
              Node.js
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginBottom: '12px' }}>
          <Box>
            <Typography sx={{ fontSize: '24px' }}>
              OS/SOFTWARE/TOOLS/OTHERS :
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '20px' }}>
              Linux, Git, GitLab, PostgreSQL, Orlace (19c), Visual Studio Code ,
              VirtualBox, Webpack , Maven, Redmine , Figma , Swaeggr Editor,
              Windows , macOS
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginBottom: '12px' }}>
          <Box>
            <Typography sx={{ fontSize: '24px' }}>AWS :</Typography>
            <Typography sx={{ fontSize: '20px' }}>
              AWS API Gateway, Lambda , DynamoDB, S3, Cognito, IAM Role , RDS
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
