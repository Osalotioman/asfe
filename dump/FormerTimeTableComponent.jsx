import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Timetable = ({ schedule }) => {
    return (
        <ScrollView style={styles.container}>
            {schedule.map((day, index) => (
                <View key={index} style={styles.dayContainer}>
                    <Text style={styles.dayTitle}>{day.day}</Text>
                    {day.classes.map((cls, idx) => (
                        <View key={idx} style={styles.classCard}>
                            <Text style={styles.subject}>{cls.subject}</Text>
                            <Text style={styles.info}>Time: {cls.time}</Text>
                            <Text style={styles.info}>Duration: {cls.duration} mins</Text>
                        </View>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f2f2f2',
    },
    dayContainer: {
        marginBottom: 24,
    },
    dayTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        marginBottom: 12,
    },
    classCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    subject: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222',
        marginBottom: 6,
    },
    info: {
        fontSize: 14,
        color: '#555',
    },
});

export default Timetable;