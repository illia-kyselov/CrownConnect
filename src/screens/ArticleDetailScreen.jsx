import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ArrowBackSVG from '../assets/ArrowBackSVG';

export default function ArticleDetailScreen({ route, navigation }) {
    const { article } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <ArrowBackSVG />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Article</Text>
            </View>
            <View style={styles.content}>
                <Image source={article.image} style={styles.articleImage} />
                <Text style={styles.articleTitle}>{article.title}</Text>
                <Text style={styles.articleDescription}>{article.description}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    header: {
        marginTop: 22,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 22
    },
    backButton: {
        marginRight: 8
    },
    headerTitle: {
        fontFamily: 'SF Pro',
        fontWeight: '700',
        fontSize: 24,
        color: '#FFFFFF'
    },
    content: {
        marginHorizontal: 16
    },
    articleImage: {
        height: 235,
        borderRadius: 16,
        marginBottom: 22,
        width: '100%',
        resizeMode: 'cover'
    },
    articleTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 16
    },
    articleDescription: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF'
    }
});
