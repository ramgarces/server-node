import {Router} from 'express'

import { getDepartments, getDepartment } from '../../models/departments'
import { getCompanies, getCompany, addCompany } from '../../models/companies'

const router = Router()

router.get('/', async (req, res) => {
    const departments = await getDepartments()
    res.send(departments)
})

router.get('/:id', async (req, res) => {
    const department = await getDepartment(req.params.id)
    if (department) {
        res.send(department)
    } else {
        res.status(404).send({msg:'Department not found'})
    }
})

export default router