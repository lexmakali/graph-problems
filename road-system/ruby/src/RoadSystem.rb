def solution(road_register)
  num_cities = road_register.length

  (0...num_cities).each do |city|
    return false if get_incoming_roads(city, road_register) != get_outgoing_roads(city, road_register)
  end

  true
end

def get_incoming_roads(city, road_register)
  road_register.transpose[city].count(true)
end

def get_outgoing_roads(city, road_register)
  road_register[city].count(true)
end
