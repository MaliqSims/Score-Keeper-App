import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Dimensions, StyleSheet, TextInput, ImageBackground, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    // Initially, Welcome page is displayed
    state = {
        askPageDisplay: 'none',
        customPageDisplay: 'block',
        standingsPageDisplay: 'none',
        name: 'Name',
        dance: 'Dance',
        response: ' ',
        team1Name: 'Team 1',
        team2Name: 'Team 2',
        team1Score: 0,
        team2Score: 0,
        win1: 0,
        tie1: 0,
        lose1: 0,
        win2: 0,
        tie2: 0,
        lose2: 0,

    }

    // When Welcome Page button is pressed, hide Info page and show Welcome page
    handleAskPagePress = () => this.setState(state => ({
        askPageDisplay: 'block',
        customPageDisplay: 'none',
        standingsPageDisplay: 'none',
    }));

    // When Info Page button is pressed, hide Welcome page and show Info page
    handleCustomPagePress = () => this.setState(state => ({
        askPageDisplay: 'none',
        customPageDisplay: 'block',
        standingsPageDisplay: 'none',
    }));
    
    handleStandingsPagePress = () => this.setState(state => ({
        askPageDisplay: 'none',
        customPageDisplay: 'none',
        standingsPageDisplay: 'block',
    }));
    
    submit = () => {
            if (this.state.team1Score > this.state.team2Score) {
            this.setState({
                win1: this.state.win1 + 1,
                lose2: this.state.lose2 + 1,
            })
        } else if (this.state.team1Score = this.state.team2Score) {
            this.setState({
                tie1: this.state.tie1 + 1,
                tie2: this.state.tie2 + 1,
            })
        } else if (this.state.team1Score < this.state.team2Score) {
            this.setState({
                lose1: this.state.lose1 + 1,
                win2: this.state.win2 + 1
            })
        } 
        this.setState(state => ({
        team1Score: 0,
        team2Score: 0,
        }));
    };


    team1givepnt = () => {
        this.setState({ 
            team1Score: this.state.team1Score + 1,
        })
    }
    team1takepnt = () => {
        this.setState({ 
            team1Score: this.state.team1Score - 1,
        })
    }
    team2givepnt = () => {
        this.setState({ 
            team2Score: this.state.team2Score + 1,
        })
    }
    team2takepnt = () => {
        this.setState({ 
            team2Score: this.state.team2Score - 1,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    ScoreKeeper
                </Text>
                <View style={styles.title}>
                        <Text paragraph ={styles.paragraph2}>
                            {this.state.team1Name}: {this.state.team1Score}
                        </Text>
                        <Text paragraph ={styles.paragraph2}>
                            {this.state.team2Name}: {this.state.team2Score}
                        </Text>
                    </View>
                <View style={styles.navbarContainer}>
                    
                    <TouchableHighlight style={styles.responseButton2}
                    onPress={this.handleCustomPagePress}
                    >
                        <Text style={styles.responseButtonText}>
                            Edit 
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.responseButton2}
                    onPress={this.handleAskPagePress}
                    >
                        <Text style={styles.responseButtonText}>
                            Teams/End
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.responseButton2}
                    onPress={this.handleStandingsPagePress}
                    >
                        <Text style={styles.responseButtonText}>
                            Standings
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={{ display: this.state.customPageDisplay }}>
                    <View style={styles.center}>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.button}
                            onPress = {this.team1givepnt}
                            >
                                <View style={styles.responseButton}>
                                    <Text style={styles.buttonText}>
                                        {this.state.team1Name} +1pnt
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.button}
                            onPress = {this.team2givepnt}
                            >
                                <View style={styles.responseButton}>
                                    <Text style={styles.buttonText}>
                                        {this.state.team2Name} +1pnt
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.responseButton}
                            onPress = {this.team1takepnt}
                            >
                                <View style={styles.responseButton}>
                                    <Text style={styles.buttonText}>
                                        {this.state.team1Name} -1pnt
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.responseButton}
                            onPress = {this.team2takepnt}
                            >
                                <View style={styles.responseButton}>
                                    <Text style={styles.buttonText}>
                                        {this.state.team2Name} -1pnt
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.responseButton}
                            onPress={() => { 
                                alert(this.state.team1Name + ' Yellow Card!') 
                            }}
                            >
                                <View style={styles.responseButton}>
                                    <Text style={styles.buttonText}>
                                        {this.state.team1Name} - Yellow Card
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.responseButton}
                            onPress={() => { 
                                alert(this.state.team2Name + ' Yellow Card!') 
                            }}
                            >
                                <View style={styles.responseButton}>
                                    <Text style={styles.buttonText}>
                                        {this.state.team2Name} - Yellow Card
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.responseButton}
                            onPress={() => { 
                                alert(this.state.team1Name + ' Red Card!') 
                            }}
                            >
                                <View style={styles.responseButton}>
                                    <Text style={styles.buttonText}>
                                        {this.state.team1Name} -Red Card
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.responseButton}
                            onPress={() => { 
                                alert(this.state.team2Name + ' Red Card!') 
                            }}>
                                <View style={styles.responseButton}>
                                    <Text style={styles.buttonText}>
                                        {this.state.team2Name} -Red Card
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>        
                </View>
                <View style={{ display: this.state.askPageDisplay }}>
                    <View style={styles.center}>
                        <Text style={styles.title2}>
                            Team Display
                        </Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(team1Name) => this.setState({team1Name})}
                            value={this.state.team1Name}
                            clearTextOnFocus={true}
                            />
                        <TextInput style={styles.textInput}
                            onChangeText={(team2Name) => this.setState({team2Name})}
                            value={this.state.team2Name}
                            clearTextOnFocus={true}
                            />
                        <View style={styles.center}>
                            <TouchableHighlight style={styles.responseButton}
                                onPress = {this.submit}
                                >
                                <View style={styles.responseButton}>
                                    <Text style={styles.buttonText}>
                                        Submit Score
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
 
                <View style={{ display: this.state.standingsPageDisplay }}>
                    <View style={styles.center}>
                        
                        <Text style={styles.title}>
                            Standings
                        </Text>
                       
                        <Text style={styles.title}>
                            {this.state.team1Name}: {this.state.win1}-{this.state.tie1}-{this.state.lose1}
                        </Text>
                        <Text style={styles.title}>
                            {this.state.team2Name}: {this.state.win2}-{this.state.tie2}-{this.state.lose2}
                        </Text>
                    </View>
                </View>
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: 'goldenrod'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'goldenrod'
    },
    contentContainer: {
        height: 5*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        backgroundColor: 'goldenrod',
    },
    title: {
        fontSize: deviceHeight/15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'darkblue',
        marginTop: 30
    },
    title2: {
        fontSize: deviceHeight/15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'darkblue',
        marginBottom: 20
    },
    paragraph: {
        marginTop: 10,
        fontSize: deviceHeight/25,
        textAlign: 'center',
        color: 'white',
    },
    paragraph2: {
        marginTop: 10,
        fontSize: 90,
        textAlign: 'center',
        color: 'white',
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'darkgoldenrod',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderColor: 'white',
        marginBottom: 25,
    },
    responseButtonText: {
        fontSize: deviceHeight/45,
        textAlign: 'center',
        color: 'darkblue',
        fontWeight: 'bold'
    },
    responseButton: {
        height: deviceHeight/12,
        width: deviceWidth/2.5,
        backgroundColor: 'teal ',
        borderColor: 'darkblue',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        textAlign: 'center',
    },
    responseButton2: {
        height: deviceHeight/12,
        width: deviceWidth/4,
        backgroundColor: 'teal ',
        borderColor: 'darkblue',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textInput: {
        height: 30,
        width: 100,
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        borderColor: 'black',
        borderWidth: 2,
        marginRight: 10,
        marginTop: 8,
        fontWeight: 'bold',
    },

});