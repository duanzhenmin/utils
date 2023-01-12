import { common, math, number } from '../index'

export default function plus(offset, type = 'date', currentDate = new Date()) {
  type = `${type || 'date'}`.toLowerCase()
  if (!number.isFinite(offset) || !type || !currentDate) {
    return
  }
  type = `${type || 'date'}`.toLowerCase()
  const supperType = {
    year: 'setFullYear',
    month: 'setMonth',
    date: 'setDate',
    hour: 'setHours',
    minute: 'setMinutes',
    second: 'setSeconds',
    week: true
  }
  if (!supperType[type]) {
    console.error('支持的类型：', Object.keys(supperType).join())
    return
  }
  if (common.Type.isDate(currentDate) ? false : !common.Type.isDate(currentDate = new Date(currentDate))) {
    return
  }
  if (type === 'week') {
    type = 'date'
    offset = math.multiplied(offset, 7)
  }
  offset = math.plus(offset, currentDate?.[supperType[type].replace('set', 'get')]?.())
  currentDate?.[supperType[type]]?.(parseInt(offset))
  return currentDate
}
