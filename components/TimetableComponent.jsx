import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

const Timetable = ({ schedule }) => {
    return (
        <ScrollView horizontal style={styles.container} contentContainerStyle={styles.scrollContent}>
            {schedule.map((day, index) => (
                <View
                    key={index}
                    style={[
                        styles.dayContainer,
                        day.day === currentDay && styles.highlightDay,
                    ]}
                >
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
        backgroundColor: '#f2f2f2',
    },
    scrollContent: {
        padding: 16,
    },
    dayContainer: {
        width: screenWidth * 0.8,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginRight: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    highlightDay: {
        borderWidth: 2,
        borderColor: '#4A90E2',
        backgroundColor: '#E3F2FD',
    },
    dayTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        marginBottom: 12,
    },
    classCard: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
    },
    subject: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222',
        marginBottom: 4,
    },
    info: {
        fontSize: 14,
        color: '#555',
    },
});

export default Timetable;
