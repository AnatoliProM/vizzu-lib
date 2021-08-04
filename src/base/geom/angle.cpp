#include "angle.h"

#include <cmath>

using namespace Geom;

double Angle::degToRad(double deg)
{
	return M_PI * deg / 180.0;
}

double Angle::radToDeg(double rad)
{
	return 180.0 * rad / M_PI;
}

Angle::Angle(const std::string &str)
{
	*this = Angle(std::stod(str));
}

Angle::operator std::string() const
{
	return std::to_string(value);
}

Angle Angle::Deg(double value) { 
	return Angle(degToRad(value)); 
}

double Angle::deg() const { 
	return radToDeg(value);
}

void Angle::sanitize() 
{
	auto angleInDeg = deg();
	angleInDeg = fmod(angleInDeg, 360);
	if (angleInDeg < 0) angleInDeg += 360;
	value = degToRad(angleInDeg);
}

Angle Geom::interpolate(Angle op0, Angle op1, double factor)
{
	if (factor <= 0.0) 
		return op0;
	
	else if (factor >= 1.0) 
		return op1;

	else if (fabs(op0.rad() - op1.rad()) <= M_PI)
		return Angle(op0.rad() * (1.0 - factor) + op1.rad() * factor);

	else if (op0.rad() < op1.rad()) 
		return Angle((op0.rad() + 2 * M_PI) * (1.0 - factor) 
			+ op1.rad() * factor);

	else 
		return Angle(op0.rad() * (1.0 - factor) 
			+ (op1.rad() + 2 * M_PI) * factor);
}