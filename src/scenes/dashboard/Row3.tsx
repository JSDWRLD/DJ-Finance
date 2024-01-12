import DashboardBox from '@/components/DashboardBox'


type Props = {}

const Row3 = (props: Props) => {
  return (
    <>
    <DashboardBox bgcolor="#fff" gridArea="g"></DashboardBox>
    <DashboardBox bgcolor="#fff" gridArea="h"></DashboardBox>
    <DashboardBox bgcolor="#fff" gridArea="i"></DashboardBox>
    <DashboardBox bgcolor="#fff" gridArea="j"></DashboardBox>
    </>
  )
}

export default Row3