import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { p } from './normalize';
import StarRating from 'react-native-star-rating';
import * as ICON from './Icons'
import { AntDesign } from '@expo/vector-icons';

export const Likes = props => {
  count = props.count % 2;
  return (
    <TouchableOpacity
      style={[styles.likesContainer,
      (count == 1 && { borderColor: '#00AEEF' })
      ]}
      onPress={props.onClick}
    >
      <Image style={styles.img} source={{ uri: props.item.img }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <View style={{ justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.h1}>{props.item.name}</Text>
            <Text style={styles.h2}>{props.item.service}</Text>
          </View>
          <View style={{ width: p(100), flexDirection: 'row', alignItems: 'center' }}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={parseFloat(5)}
              fullStarColor={'gold'}
              starSize={p(15)}
              starStyle={styles.start}
            />
            <Text style={styles.h3}>({props.item.rating})</Text>
          </View>
        </View>
        <Image source={{ uri: props.item.avatar }} style={styles.avatar} />

      </View>
    </TouchableOpacity>
  )
}

export const Mis = props => {
  return (
    <TouchableOpacity
      style={styles.misContainer}
      onPress={props.onClick}
    >
      <Image style={styles.img} source={{ uri: props.item.img }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <View style={{ justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.h1}>{props.item.name}</Text>
            <Text style={styles.h2}>{props.item.address}</Text>
            <Text style={styles.h2}>{props.item.phone}</Text>
          </View>
          <View style={{ width: p(100), flexDirection: 'row', alignItems: 'center' }}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={parseFloat(5)}
              fullStarColor={'gold'}
              starSize={p(15)}
              starStyle={styles.start}
            />
            <Text style={styles.h3}>({props.item.rating})</Text>
          </View>
        </View>
        {
          !props.disable &&
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <ICON.Pencil left={p(12)} />
            <ICON.Delete left={p(12)} />
          </View>
        }
      </View>
    </TouchableOpacity>
  )
}

export const Comentarios = props => {
  return (
    <TouchableOpacity
      style={[styles.misContainer, { height: p(60), marginHorizontal: p(12) }]}
      onPress={props.onClick}
    >
      <Image style={styles.img} source={{ uri: props.item.img }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <View style={{ justifyContent: 'space-between', height: p(50) }}>
          <View>
            <Text style={styles.h1}>{props.item.name}</Text>
            <Text style={styles.h2}>{props.item.address}</Text>
          </View>
          <View style={{ width: p(60), flexDirection: 'row', alignItems: 'center' }}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={parseFloat(5)}
              fullStarColor={'gold'}
              starSize={p(11)}
              starStyle={styles.start}
            />
          </View>
        </View>

      </View>

      <View style={{ alignItems: 'center', width: p(40) }}>
          <AntDesign name={'delete'} size={p(26)} color={'#777'} style={{ marginLeft: p(6), }} />
        </View>

    </TouchableOpacity>
  )
}

export const MISComentariosItem = props => {
  return (
    <TouchableOpacity
      style={[styles.misContainer, { height: p(60), marginHorizontal: p(12) }]}
      onPress={props.onClick}
    >
      <Image style={styles.img} source={{ uri: props.item.img }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <View style={{ justifyContent: 'space-between', height: p(50) }}>
          <View>
            <Text style={styles.h1}>{props.item.name}</Text>
            <Text style={styles.h2}>{props.item.address}</Text>
          </View>
          <View style={{ width: p(60), flexDirection: 'row', alignItems: 'center' }}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={parseFloat(5)}
              fullStarColor={'gold'}
              starSize={p(11)}
              starStyle={styles.start}
            />
          </View>
        </View>

      </View>

      <View style={{ alignItems: 'center', width: p(40) }}>
          <AntDesign name={'delete'} size={p(26)} color={'#777'} style={{ marginLeft: p(6), }} />
        </View>

    </TouchableOpacity>
  )
}

export const VisaCard = props => {
  return (
    <TouchableOpacity
      style={styles.misContainer}
      onPress={props.onClick}
    >
      <Image style={styles.img} source={{ uri: 'https://banner2.kisspng.com/20180403/oiw/kisspng-credit-card-visa-mastercard-discover-card-american-visa-5ac429f797f5c8.0621636215228052396224.jpg' }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <View style={{ justifyContent: 'space-between' }}>
          <Text style={styles.h1}>{'********2115'}</Text>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <ICON.Pencil left={p(12)} />
          <ICON.Delete left={p(12)} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const Messages = props => {
  const read = props.item.read
  return (
    <TouchableOpacity
      style={[styles.msgContainer,
      (read && { backgroundColor: '#E6E7E9' })
      ]}
      onPress={props.onClick}
    >
      <Image source={{ uri: props.item.avatar }} style={styles.avatar} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginLeft: p(12) }}>
        <View style={{ justifyContent: 'space-between', height: p(55) }}>
          <View>
            <Text style={styles.h11}>{props.item.name}</Text>
            <Text style={styles.h12}>{props.item.msg}</Text>
          </View>
          <Text style={styles.h13}>Hace{props.item.time}</Text>
        </View>
      </View>
      <ICON.Delete right={p(12)} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  likesContainer: {
    paddingHorizontal: p(12),
    paddingVertical: p(6),
    borderRadius: p(12),
    marginHorizontal: p(3),
    marginVertical: p(5),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f26d03',
    borderWidth: p(4)
  },
  misContainer: {
    paddingHorizontal: p(12),
    paddingVertical: p(6),
    borderRadius: p(12),
    marginHorizontal: p(2),
    marginVertical: p(5),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#797979',
    borderWidth: 1
  },
  msgContainer: {
    paddingHorizontal: p(12),
    paddingVertical: p(6),
    borderRadius: p(6),
    marginHorizontal: p(2),
    marginVertical: p(2),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E6E7E9',
    borderWidth: 1
  },
  avatar: {
    width: p(60),
    height: p(60),
    borderRadius: p(30)
  },
  img: {
    width: p(60),
    height: p(40),
    resizeMode: 'contain'
  },
  h1: {
    fontSize: p(14),
    fontFamily: 'GeosansLight'
  },
  h2: {
    fontSize: p(11),
    fontFamily: 'GeosansLight'
  },
  h3: {
    fontSize: p(10),
    fontFamily: 'GeosansLight'
  },
  h11: {
    fontSize: p(15),
    fontFamily: 'Caviar_Dreams_Bold'
  },
  h12: {
    fontSize: p(10),
    fontFamily: 'CaviarDreams'
  },
  h13: {
    fontSize: p(10),
    fontFamily: 'CaviarDreams'
  },
  icon: {
    width: p(20),
    height: p(20)
  },
  start: {
    paddingRight: 5
  },
});
