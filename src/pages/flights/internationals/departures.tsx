import { flights } from '../../../example/flights'
import * as React from 'react'
import FlightsList from '../../../components/flights/FlightsList'
import HomeLayout from '../../../components/layout/HomeLayout'

export default function DeparturesPage() {
  return (
    <HomeLayout>
      <FlightsList flights={flights} />
    </HomeLayout>
  )
}
