#include "numtostr.h"

using namespace Conv;

const NumberToString NumberToString::def;

NumberToString::NumberToString() {
    integerDigitCount = 12;
    fractionDigitCount = 9;
    fillIntegerWithZero = false;
    fillFractionWithZero = false;
    signChar = '-';
    integerGgrouping = '\0';
    fractionGgrouping = '\0';
    decimalPointChar = '.';
    buffer.reserve(64);
}

std::string NumberToString::convert(double number) const {
    buffer.clear();
    int64_t intPart = (int64_t)number;
    double fractPart = number - intPart;
    if (intPart < 0)
        buffer += signChar, intPart *= -1, fractPart *= -1;
    integerToString(intPart);
    if (fractionDigitCount > 0 && (fractPart != 0 || fillFractionWithZero))
        fractionToString(fractPart);
    return buffer;
}

std::string NumberToString::operator()(double number) const {
    return convert(number);
}

void NumberToString::integerToString(uint64_t num) const {
    uint64_t scale = 1, len = 0;
    for(int i = integerDigitCount - 1;
        (fillIntegerWithZero && i) || (num / scale / 10);
        scale *= 10, len++, i--)
        ;
    const char* digits = "0123456789";
    bool valuableDigit = false;
    for (int i = 0; scale; scale /= 10, i++, len--) {
        int val = (num / scale) % 10;
        if (val && !valuableDigit)
            valuableDigit = true;
        if (valuableDigit || fillIntegerWithZero)
            buffer += digits[val];
        if (integerGgrouping != '\0' && len && !(len%3))
            buffer += integerGgrouping;
    }
    if (!valuableDigit && !fillIntegerWithZero)
        buffer += '0';
}

void NumberToString::fractionToString(double num) const {
    int len = -1;
    double round = 0.5;
    for(int i = 1; i <= fractionDigitCount; i++, round /= 10);
    num += round;
    double tmp = num;
    for(int i = 1; i <= fractionDigitCount; tmp -= (int)tmp, i++) {
        tmp *= 10;
        if ((int)tmp > 0)
            len = i;
    }
    const char* digits = "0123456789";
    if (len >= 0 || fillFractionWithZero) {
        buffer += decimalPointChar;
        for(int i = 1; i <= fractionDigitCount; i++) {
            num *= 10;
            buffer += digits[(int)num];
            if (!fillFractionWithZero && i >= len)
                break;
            if (fractionGgrouping != '\0' && i && !(i%3))
                buffer += fractionGgrouping;
            num -= (int)num;
        }
    }
}