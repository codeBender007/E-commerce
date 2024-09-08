import React from 'react'
import Achivement from './Achivement'
import MonthlyOveview from './MonthlyOveview'
import { Grid } from '@mui/material'
import OrdersTable from '../view/OrderTableView'
import ProductTableView from '../view/ProductTableView'




function AdminDashboard() {
  return (
    <div className='p-10'>
      <Grid container spacing={3}>
        <Grid  item xs={12} md={4}>

          <div className='shadow-lg shadow-gray-600'>
            <Achivement />
          </div>
      
        </Grid>
        <Grid  item xs={12} md={8}>

          <div className='shadow-lg shadow-gray-600'>
            <MonthlyOveview />
          </div>

        </Grid>

        <Grid  item xs={12} md={6}>
          <div className='shadow-lg shadow-gray-600'>
            <OrdersTable />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className='shadow-lg shadow-gray-600'>
            <ProductTableView/>
          </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default AdminDashboard
