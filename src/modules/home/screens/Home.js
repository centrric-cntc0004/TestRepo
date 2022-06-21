import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native'
import ViewSlider from 'react-native-view-slider'
import { RectangleImage, IconI, Colors } from '../../../components/images'
const { width, height } = Dimensions.get('window');
let width1 = Dimensions.get('window').width
import { connect } from 'react-redux'

width1 = width1 - (width1 / 100) * 6;
const DefaultHome = ({ navigation, route, team_list, isLoading }) => {
  const RenderForm = () => {

    const RenderItems = ({ item }) => {
      return (
        <View style={styles.viewBox1}>
          <Image source={{ uri: item.image }}

            style={{ height: 130, width: '95%', borderRadius: 20, }} />
          <View style={{
            position: 'absolute',
            bottom: 0,
            top: '69%',
            left: 0,
            right: 0,
            alignItems: 'center',
          }}>
            <View style={{
              flexDirection: 'row',
              height: 40, width: '95%', backgroundColor: '#929292', opacity: 0.8,
              borderBottomRightRadius: 20, borderBottomLeftRadius: 20
            }}>
              <View style={{ width: "50%", justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Text numberOfLines={1}
                  style={{ marginTop: 10, marginLeft: 5, color: '#FFFFFF', fontWeight: 'bold' }}>{item.name}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '50%' }}>

                </View>
                <View style={{ marginTop: 10, justifyContent: "center", alignItems: 'center', height: 40, width: 40, borderRadius: 20, backgroundColor: 'white' }}>
                  <Image source={IconI}>

                  </Image>
                </View>
              </View>
            </View>
          </View>
        </View>
      )

    };

    return (



      <View style={{ flex: 1, }}>
        <View style={{ flexDirection: 'row', height: 100, backgroundColor: "#5DA7A3", justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: "white", fontSize: 30, marginTop: 20, textAlign: 'center' }}>IROID</Text>
        </View>


        <ViewSlider
          renderSlides={
            <>
              <View style={styles.viewBox}>
                <Image source={RectangleImage}
                  resizeMode="contain"
                  style={{ height: 250, width: width1, marginRight: 40 }} />
              </View>
              <View style={styles.viewBox}><Text>TWO</Text></View>
              <View style={styles.viewBox}><Text>THREE</Text></View>
              <View style={styles.viewBox}><Text>FOUR</Text></View>
            </>
          }
          style={styles.slider}     //Main slider container style
          height={200}    //Height of your slider
          slideCount={4}    //How many views you are adding to slide
          dots={true}     // Pagination dots visibility true for visibile 
          dotActiveColor='red'     //Pagination dot active color
          dotInactiveColor='gray'    // Pagination do inactive color
          dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
          autoSlide={false}    //The views will slide automatically
          slideInterval={1000}    //In Miliseconds
        />

        {isLoading || team_list.length === 0 || team_list === undefined ? (
          <ActivityIndicator color="#5DA7A3" size="large">
          </ActivityIndicator>
        ) : (
            <FlatList

              data={team_list.data.meal_categories}
              renderItem={RenderItems}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, key) => key.toString()}
              onEndReachedThreshold={1}


            />
          )}
      </View>



    )

  }
  return (

    <View style={{ flex: 1 }}>
      <RenderForm />
    </View>

  )
}
const styles = StyleSheet.create({
  viewBox: {
    marginTop: 30,
    justifyContent: 'center',
    width: width1,
    marginLeft: 30,
    marginRight: 40,
    alignItems: 'center',
    height: 150,
  },
  viewBox1: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 15
  }
});
const mapStateProps = (state) => {
  const { team_list, isLoading, } = state.team

  return { team_list, isLoading, }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateProps, mapDispatchToProps)(DefaultHome)



