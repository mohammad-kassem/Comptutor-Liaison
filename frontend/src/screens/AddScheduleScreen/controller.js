import { View, Text } from 'react-native'
import React from 'react'

export function toDateString(date) {
    return `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`
}

export function toTimeString(date) {
    return `${date.getHours()}:${date.getMinutes()}`
}